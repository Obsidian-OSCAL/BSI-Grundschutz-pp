---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.16 Datenaustausch in der Virtualisierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.16 - Datenaustausch in der Virtualisierung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *** | Virtualisierungslösungen | KANN | den Datenaustausch zwischen virtualisierten Client |  | einschränken | Konfigurationshistorie | >Konfiguration für Virtualisierungslösungen KANN den Datenaustausch zwischen virtualisierten Client einschränken.

> [!info]- Guidance
>Der Datenaustausch zwischen virtualisierten Anwendungen umfasst jegliche direkte oder indirekte Kommunikationswege wie virtuelle Netzwerke, geteilte Speicherbereiche oder Copy-and-Paste-Funktionen über die Virtualisierungsplattform. Der Sinn dieser Anforderung liegt darin, unbeabsichtigte oder böswillige Datenübertragungen zwischen isolierten Anwendungen einzuschränken. Ohne diese Einschränkungen könnte Schadsoftware von einer kompromittierten VM unbemerkt auf eine andere übergreifen oder sensible Informationen könnten durch Fehlkonfigurationen ungewollt in eine fremde VM gelangen. Eine klare Abgrenzung kann hingegen sicherstellen, dass selbst bei Kompromittierung einer Anwendung deren Wirkungskreis begrenzt bleibt und Vertraulichkeit, Integrität sowie Stabilität anderer Anwendungen erhalten bleiben. Die praktische Umsetzung kann durch mehrere Maßnahmen erfolgen, die sich technisch wie prozessual ergänzen. So kann eine Institution (1) virtuelle Netzwerke segmentieren, sodass VMs nur über explizit eingerichtete Firewalls miteinander kommunizieren können, (2) gemeinsame Speicherbereiche oder Zwischenablagen deaktivieren, sofern diese nicht zwingend benötigt werden, und (3) die Nutzung von Schnittstellen wie USB-Passthrough oder Drag-and-Drop bewusst unterbinden oder nur für klar definierte Administrations-VMs freigeben. Darüber hinaus kann es sinnvoll sein, die Konfiguration regelmäßig mit Härtungsleitfäden abzugleichen. Ein pragmatischer Tipp ist es, beim Aufsetzen neuer VMs die Standardkonfigurationen bewusst restriktiv zu wählen und nur jene Austauschfunktionen schrittweise zu aktivieren, die für den Geschäftsbetrieb wirklich erforderlich sind.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 55db7b45-c04c-42c6-b803-eacd27aee6c7 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 55db7b45-c04c-42c6-b803-eacd27aee6c7 |
