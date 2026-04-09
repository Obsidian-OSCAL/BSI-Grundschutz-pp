---
tags: Lieferketten_Exit-Strategie
class: BSI-Stand-der-Technik-Kernel
type: control
control: DLS.4.1 Dekomissionierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DLS.4.1 - Dekomissionierung
Tags: "[Lieferketten](tags_Lieferketten)" "[Exit-Strategie](tags_Exit-Strategie)"
Gruppe: [DLS.4 Dekommissionierung von Dienstleistern](BSI/Grundschutz/Quellkataloge/Kernel/groups/DLS.4%20Dekommissionierung%20von%20Dienstleistern.md)
---

> [!info]- Untergeordnete Controls
> [DLS.4.1.1 Unabhängigkeit](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DLS.4.1.1%20Unabhängigkeit.md)> [DLS.4.1.2 Berechtigungen deaktivieren](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DLS.4.1.2%20Berechtigungen%20deaktivieren.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Dienstleistersteuerung (DLS)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DLS%20Dienstleistersteuerung.md)**<br> ***  &rarr; [Dekommissionierung von Dienstleistern](BSI/Grundschutz/Quellkataloge/Kernel/groups/DLS.4%20Dekommissionierung%20von%20Dienstleistern.md) *** | Dienstleistungen | SOLLTE | eine Vorgehensweise zur Dekommissionierung | vor Vertragsende | verankern | Betriebshandbuch | >Dienstleistersteuerung für Dienstleistungen SOLLTE eine Vorgehensweise zur Dekommissionierung vor Vertragsende verankern.

> [!info]- Guidance
>Der Begriff Dekommissionierung bezeichnet hier das strukturierte und nachweisbare Vorgehen, wie eine Institution die Nutzung eines Dienstes oder die Zusammenarbeit mit einem Dienstleister kontrolliert beendet, ohne dass Informationssicherheit, Verfügbarkeit oder Nachvollziehbarkeit beeinträchtigt werden. Der Sinn dieser Vorgabe liegt darin, Risiken wie den unkontrollierten Verbleib sensibler Daten bei einem Dienstleister oder unerkannte Abhängigkeiten von dessen Infrastruktur zu vermeiden. Ohne ein definiertes Vorgehen könnte etwa ein Anbieter weiterhin Zugriff auf produktive Systeme behalten oder Kopien vertraulicher Daten in seiner Umgebung zurückhalten, was ein erhebliches Risiko darstellen könnte. Die praktische Umsetzung kann in mehreren abgestuften Maßnahmen bestehen: (1) Ein geplanter Abschalttermin kann genutzt werden, um Systeme, Schnittstellen und Berechtigungen kontrolliert zurückzubauen und anschließend durch ein Freigabeprotokoll zu bestätigen. (2) Ein Prozessleitfaden kann die frühzeitige Identifikation von zu dekommissionierenden Schnittstellen, Zugangsdaten und Subdienstleistern vorsehen, damit deren Abschaltung rechtzeitig koordiniert werden kann. (3) Eine Checkliste kann sicherstellen, dass auch weniger offensichtliche Abhängigkeiten – etwa hinterlegte API-Tokens, Support-Zugänge oder im Monitoring integrierte Endpunkte – im Abschlussprozess berücksichtigt werden. (4) Technisch kann die Nutzung von zentral verwalteten Zugriffskonten und Logging-Systemen die Überprüfung erleichtern, ob ein Dienstleister nach der Deaktivierung tatsächlich keinen Zugriff mehr hat. Auf diese Weise kann die Institution die Dienstleistersteuerung auch vorzeitig geordnet beenden, ohne dass Informationssicherheitsrisiken unkontrolliert fortbestehen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | a78062a0-7fff-43a7-906a-6db806cf6822 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | a78062a0-7fff-43a7-906a-6db806cf6822 |

> [!info]- Links> > related: [BES.6.1 Entziehung der Zugangsberechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BES.6.1%20Entziehung%20der%20Zugangsberechtigungen.md)
