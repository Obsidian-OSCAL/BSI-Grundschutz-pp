---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.1 Minimal erforderliche Berechtigungen für Anwendungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.1 - Minimal erforderliche Berechtigungen für Anwendungen
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

> [!info]- Untergeordnete Controls
> [KONF.6.1.1 Datenkapselung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.6.1.1%20Datenkapselung.md)> [KONF.6.1.2 Isolierung von Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.6.1.2%20Isolierung%20von%20Anwendungen.md)> [KONF.6.1.3 Isolierte Arbeitsumgebungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.6.1.3%20Isolierte%20Arbeitsumgebungen.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *** | IT-Systeme | SOLLTE | erforderliche Berechtigungen für Anwendungen |  | einschränken | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE erforderliche Berechtigungen für Anwendungen einschränken.

> [!info]- Guidance
>Ziel ist es, Angriffsflächen zu minimieren und unerwünschte Seiteneffekte zu vermeiden. Durch restriktive Rechtevergabe pro App lässt sich das Risiko für Zugriffe auf sensible Bereiche stark senken. Gleichzeitig trägt dieses Prinzip dazu bei, eine klare Trennung zwischen den einzelnen Systemkomponenten zu bewahren und unkontrollierte Wechselwirkungen zu verhindern. Beispiele sind Lese- und Schreibrechte für Verzeichnisse, insbesondere für Systemverzeichnisse, Berechtigungen zum Zugriff auf Sensoren oder Peripheriegeräte, sowie der Netzzugriff. Um die Umsetzung zu erleichtern können Berechtigungsprofile erstellt werden, die je nach Anwendungsklasse (z. B. Office, Multimedia, Tools) eine Basislinie an Privilegien definieren. Diese Profile können in einer zentralen Verwaltungssoftware (z. B. über Gruppenrichtlinien oder ein Mobile‑Device‑Management) hinterlegt und automatisch auf neue Installationen angewendet werden. Vor der Freigabe einer Softwareinstallation kann ein Reviewprozess etabliert werden, bei dem anhand von Funktionsdokumentationen geprüft wird, welche minimalen Rechte erforderlich sind. Darüber hinaus kann der Einsatz von Sandboxing- oder Virtualisierungstechnologien unterstützen, indem Anwendungen in einer isolierten Umgebung mit genau festgelegten Schnittstellen betrieben werden können. Tools zur Rechteanalyse (etwa zur Ermittlung der tatsächlich genutzten APIs und Dateizugriffe) können helfen, überflüssige Freigaben im Nachgang weiter einzuschränken.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | cc6a9a9d-cb65-4e22-aad5-d93f73e522b8 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | cc6a9a9d-cb65-4e22-aad5-d93f73e522b8 |
