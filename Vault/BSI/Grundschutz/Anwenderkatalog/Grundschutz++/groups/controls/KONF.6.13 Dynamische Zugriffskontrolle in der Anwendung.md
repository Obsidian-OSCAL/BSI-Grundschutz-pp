---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.13 Dynamische Zugriffskontrolle in der Anwendung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.13 - Dynamische Zugriffskontrolle in der Anwendung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *** | Anwendungen | KANN | dynamische Zugriffskontrolle | in der Anwendung | aktivieren | Konfigurationshistorie | >Konfiguration für Anwendungen KANN dynamische Zugriffskontrolle in der Anwendung aktivieren.

> [!info]- Guidance
>Dynamische Zugriffskontrolle („dynamic access control“, DAC) bezeichnet hier eine Form der Autorisierungsprüfung innerhalb einer Anwendung, bei der die Entscheidung über den Zugriff nicht ausschließlich anhand statischer Rollen oder Benutzergruppen erfolgt, sondern zusätzlich kontextabhängige Bedingungen („contextual attributes“) berücksichtigt werden. Solche Bedingungen können beispielsweise der aktuelle Standort der Anmeldung, die Geräteklasse, der Zeitpunkt des Zugriffs oder die Sensitivität der angeforderten Daten sein. Die zugrunde liegende Zugriffsrichtlinie („policy“) bleibt dabei fest definiert – die Dynamik betrifft ausschließlich die Bewertung der in ihr vorgesehenen Parameter. Dadurch unterscheidet sich DAC auf Anwendungsebene von klassischen „role-based access control“ (RBAC)-Mechanismen, indem sie feinere, situative Entscheidungen erlaubt, ohne dass Berechtigungen für den Einzelfall manuell vergeben werden. Die Möglichkeit, eine dynamische Zugriffskontrolle in der Anwendung zu aktivieren, kann wesentlich dazu beitragen, unbefugte oder unangemessene Zugriffe zu verhindern, wenn sich Sicherheitsbedingungen ändern. Ohne solche Mechanismen könnte ein Benutzer etwa trotz eines kompromittierten Geräts oder außerhalb sicherer Netzbereiche weiterhin auf vertrauliche Daten zugreifen, was zu Datenabfluss oder Manipulation führen könnte. Die dynamische Kontrolle kann hingegen sicherstellen, dass Zugriffe nur gewährt werden, wenn aktuelle Kontextparameter mit den definierten Sicherheitsrichtlinien übereinstimmen, wodurch das Risiko situativer Angriffe deutlich reduziert werden kann. Beispiele sind Anwendungen (1) eine Policy-Engine wie XACML-kompatible Systeme zur regelbasierten Entscheidungsfindung verwenden, (2) Attributquellen wie Identity Provider oder Endpoint-Sicherheitslösungen zur Kontextbewertung einbinden oder (3) adaptive Autorisierungsmechanismen, etwa über Open Policy Agent.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 55dfbf64-f1f3-4765-a0d3-78f0a1f00654 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 55dfbf64-f1f3-4765-a0d3-78f0a1f00654 |
