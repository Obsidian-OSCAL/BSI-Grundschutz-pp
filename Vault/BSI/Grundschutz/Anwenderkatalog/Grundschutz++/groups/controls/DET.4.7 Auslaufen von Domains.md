---
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.7 Auslaufen von Domains
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.7 - Auslaufen von Domains
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *** | Webserver | KANN | das Auslaufen von Domains |  | überwachen | Detektions-Konzept | >Detektion für Webserver KANN das Auslaufen von Domains überwachen.

> [!info]- Guidance
>Wenn Registrierungsfristen und Verlängerungszeiträume nicht im Blick behalten werden, könnte eine Domain aus Versehen verfallen und damit einhergehend Erreichbarkeits­probleme, Vertrauensverluste oder gar Sicherheits­lücken entstehen. Als Beispiele können Domains dienen, die für Web­auftritte, E‑Mail-Systeme oder API-Endpunkte genutzt werden. Ebenso kann es sich um Subdomains handeln, die für interne Tools, Test­umgebungen oder automatisierte Monitoring­dienste registriert sind. Auch Domains, die nur der Weiterleitung auf Haupt­präsenzen dienen oder die für Zertifikats­ver­waltung (z. B. ACME-Challenges) verwendet werden, können unter diese Überwachung fallen. Jede dieser Anwendungsfälle kann potenziell betroffen sein, wenn die Registrierung unbemerkt abläuft.  Hilfreich ist hierfür ein zentrales Inventar aller genutzten Domains in dem Registrierungs­daten (Ablaufdatum, Registrar, Kontakt­email) erfasst werden. Automatisierte Scripts oder Aufgaben­tickets können eingerichtet werden, die in festgelegten Abständen (z. B. 60, 30 und 7 Tage vor Ablauf) eine Benachrichtigung auslösen. Auch Monitoring-Plattformen mit DNS-Plugins können verwendet werden, um Fristen zu prüfen und Erinnerungen zu generieren. Zusätzlich kann eine Prozess­beschreibung definiert werden, in der Verantwortlichkeiten und Eskalations­wege bei nahendem Domain­ablauf festgehalten sind, um schnelle Entscheidungen und Verlängerungen zu ermöglichen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 631793e6-cc3f-49cf-a6aa-f7672688f007 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 631793e6-cc3f-49cf-a6aa-f7672688f007 |
