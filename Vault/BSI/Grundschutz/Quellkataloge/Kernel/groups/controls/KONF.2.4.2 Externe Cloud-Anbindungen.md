---
tags: Data_Leak
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.2.4.2 Externe Cloud-Anbindungen
parent_control: KONF.2.4 Deaktivierung nicht benötigter Systemfunktionen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.2.4.2 - Externe Cloud-Anbindungen
Tags: "[Data Leak](tags_Data Leak)"
Gruppe: [KONF.2 Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md)
---

** Übergeordnetes Control: ** [KONF.2.4 Deaktivierung nicht benötigter Systemfunktionen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.2.4%20Deaktivierung%20nicht%20benötigter%20Systemfunktionen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md) *** | IT-Systeme | SOLLTE | nicht benötigte Cloud-Anbindungen |  | deaktivieren | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE nicht benötigte Cloud-Anbindungen deaktivieren.

> [!info]- Guidance
>Eine Cloud-Anbindung ist eine technische Schnittstelle, über die ein IT-System Daten oder Dienste mit einer externen Cloud-Plattform austauscht. Dazu können sowohl direkte API-Integrationen wie die Anmeldung an Cloud-Verzeichnisdienste, aber auch automatische Synchronisationsmechanismen, Hintergrund-Updates über Cloud-Server oder agentenbasierte Remote-Management-Funktionen zählen. Nicht benötigte Anbindungen können dadurch identifiziert werden, dass sie weder für den produktiven Betrieb noch für Wartung, Support oder Sicherheitsfunktionen erforderlich sind. Der Sinn und Zweck dieser Regelung liegt darin, die Angriffsfläche zu reduzieren und unkontrollierte Datenflüsse zu vermeiden. Ein nicht genutzter, aber weiterhin aktiver Cloud-Connector könnte etwa unbemerkt sensible Metadaten an Drittdienste übertragen oder als Einfallstor für Schadsoftware missbraucht werden; die gezielte Deaktivierung kann dagegen unnötige Risiken eliminieren und die Übersichtlichkeit der Systemarchitektur erhöhen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 35875b35-0c23-473e-b1d6-1741c315dc88 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 35875b35-0c23-473e-b1d6-1741c315dc88 |
