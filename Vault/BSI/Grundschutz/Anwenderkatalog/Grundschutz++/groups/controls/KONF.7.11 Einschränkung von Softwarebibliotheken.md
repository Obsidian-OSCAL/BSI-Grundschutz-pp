---
tags: Produktbeschreibung_Lieferketten
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.7.11 Einschränkung von Softwarebibliotheken
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.7.11 - Einschränkung von Softwarebibliotheken
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Lieferketten](tags_Lieferketten)"
Gruppe: [KONF.7 Schutz vor Schadcode](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.7%20Schutz%20vor%20Schadcode.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Schutz vor Schadcode](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.7%20Schutz%20vor%20Schadcode.md) *** | IT-Systeme | KANN | die Ausführung nicht autorisierter Softwarebibliotheken |  | einschränken | Konfigurationshistorie | >Konfiguration für IT-Systeme KANN die Ausführung nicht autorisierter Softwarebibliotheken einschränken.

> [!info]- Guidance
>Softwarebibliotheken sind wiederverwendbare Codesammlungen, die Entwicklern fertige Funktionalitäten bieten, ohne diese selbst programmieren zu müssen. Unautorisierte Bibliotheken stellen Sicherheitsrisiken dar, weil sie absichtlich eingeschleusten Schadcode enthalten könnten, der Daten ausspioniert oder Systeme kompromittiert. Sie durchlaufen seltener reguläre Sicherheitsüberprüfungen und könnten für Supply-Chain-Angriffe genutzt werden, bei denen harmlos erscheinender Code mit versteckten Schadfunktionen in Paketmanager eingeschleust wird. Zudem erhalten unautorisierte Bibliotheken häufig keine regelmäßigen Sicherheitsupdates, sodass bekannte Schwachstellen unbehoben bleiben. Mangelnde Dokumentation und unklare Abhängigkeiten von anderen ungeprüften Quellen erhöhen das Risiko zusätzlich. Beispiele sind Dateien der Typen .dll, .ocx,  und .so. Die Umsetzung kann durch Sicherheitsfunktionen erfolgen, die nur das Laden autorisierter Bibliotheken in Systemprozessen erlaubt. Verfügt das IT-System über keine Möglichkeit zur Installation von Anwendungen, so ist die Anforderung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 8de44b0e-0241-4519-9dc3-e941800b4168 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 8de44b0e-0241-4519-9dc3-e941800b4168 |
